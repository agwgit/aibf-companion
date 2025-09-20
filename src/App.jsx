import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Clock,
  ArrowRight
} from 'lucide-react'
import './App.css'
import { weekContent, courseWeeks } from './data/index.js';
// Utility function to parse markdown links
function parseMarkdownLinks(text) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  return text.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>');
}

// JSX Components for prompts
function ChatPrompt({ icon, text }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          console.error('Copy command failed');
        }
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Additional fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy also failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border">
      <span className="text-lg">{icon}</span>
      <span className="text-gray-700 flex-1">{text}</span>
      <button 
        onClick={handleCopy}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          copied 
            ? 'bg-green-500 text-white' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

function CopyablePrompt({ title, prompt }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = prompt;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          console.error('Copy command failed');
        }
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Additional fallback
      const textArea = document.createElement('textarea');
      textArea.value = prompt;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy also failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <div className="bg-gray-50 p-4 rounded border">
        <div className="flex justify-between items-start gap-4">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap flex-1 font-mono">{prompt}</pre>
          <button 
            onClick={handleCopy}
            className={`px-3 py-1 text-sm rounded transition-colors flex-shrink-0 ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}

// courseWeeks is now imported from data/index.js

function Section({ section, completed, onToggle }) {
  const [showPrompts, setShowPrompts] = useState(false)
  
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{section.title}</h3>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm font-medium">
              {section.hint}
            </Badge>
            <Button
              onClick={onToggle}
              variant={completed ? "default" : "outline"}
              size="sm"
              className="flex items-center gap-2"
            >
              {completed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              Mark Complete
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-lg text-gray-700 leading-relaxed">
            {section.content.includes('**') || section.content.includes('[') ? (
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: parseMarkdownLinks(
                    section.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/\n\n/g, '<br><br>')
                      .replace(/\n/g, '<br>')
                  ) 
                }} 
              />
            ) : (
              section.content.split(' • ').map((item, index) => (
                <div key={index} className="mb-2">• {item}</div>
              ))
            )}
          </div>
        </div>
        
        {/* Copyable Prompts */}
        {section.copyablePrompts && section.copyablePrompts.length > 0 && (
          <div className="border-t pt-6 space-y-4">
            {section.copyablePrompts.map((prompt, index) => (
              <CopyablePrompt key={index} title={prompt.title} prompt={prompt.prompt} />
            ))}
          </div>
        )}
        
        {/* Involvement Prompts */}
        {section.hasPrompts && section.prompts && section.prompts.length > 0 && (
          <div className="border-t pt-4">
            <Button
              onClick={() => setShowPrompts(!showPrompts)}
              variant="outline"
              className="w-full justify-between bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100"
            >
              Involvement prompts
              <ChevronRight className={`w-4 h-4 transition-transform ${showPrompts ? 'rotate-90' : ''}`} />
            </Button>
            
            {showPrompts && (
              <div className="mt-4 space-y-2">
                {section.prompts.map((prompt, index) => (
                  <ChatPrompt key={index} icon={prompt.icon} text={prompt.text} />
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function App() {
  const [currentWeek, setCurrentWeek] = useState('w0')
  const [completedSections, setCompletedSections] = useState({})
  
  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aibf-progress')
    if (saved) {
      setCompletedSections(JSON.parse(saved))
    }
  }, [])
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('aibf-progress', JSON.stringify(completedSections))
  }, [completedSections])
  
  const toggleSection = (sectionId) => {
    setCompletedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }
  
  const currentWeekData = weekContent[currentWeek]
  const totalSections = Object.values(weekContent).reduce((acc, week) => acc + week.sections.length, 0)
  const completedCount = Object.values(completedSections).filter(Boolean).length
  const overallProgress = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0
  
  const weekProgress = currentWeekData.sections.length > 0 
    ? Math.round((currentWeekData.sections.filter(s => completedSections[s.id]).length / currentWeekData.sections.length) * 100)
    : 0

  const handleNextWeek = () => {
    const currentIndex = courseWeeks.findIndex(w => w.id === currentWeek)
    if (currentIndex < courseWeeks.length - 1) {
      setCurrentWeek(courseWeeks[currentIndex + 1].id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">AIBF Interactive Portal</h1>
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-600">
                Progress: {overallProgress}%
              </div>
              <Select value={currentWeek} onValueChange={setCurrentWeek}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {courseWeeks.map(week => (
                    <SelectItem key={week.id} value={week.id}>
                      {week.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWeek}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Week Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentWeekData.title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {currentWeekData.subtitle}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {currentWeekData.estimatedTime}
                </div>
                <Badge variant="secondary">
                  {currentWeekData.difficulty}
                </Badge>
                <div>
                  Week Progress: {weekProgress}%
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {currentWeekData.sections.map(section => (
                <Section
                  key={section.id}
                  section={section}
                  completed={completedSections[section.id]}
                  onToggle={() => toggleSection(section.id)}
                />
              ))}
            </div>

            {/* Next Week Button */}
            {courseWeeks.findIndex(w => w.id === currentWeek) < courseWeeks.length - 1 && (
              <div className="mt-12 text-center">
                <Button onClick={handleNextWeek} size="lg" className="px-8">
                  Next Week
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
