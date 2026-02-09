// src/components/about/visual-signature.tsx
import { Sparkles } from 'lucide-react'

export default function VisualSignature() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm">طراحی شده با ❤️ توسط تیم وب‌تری</span>
      </div>
    </div>
  )
}