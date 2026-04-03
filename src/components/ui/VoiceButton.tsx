'use client';

import React, { useState } from 'react';
import { Mic, Volume2, X } from 'lucide-react';

interface VoiceButtonProps {
  onTranscript?: (text: string) => void;
  lang?: string;
}

export default function VoiceButton({ onTranscript, lang = 'en-IN' }: VoiceButtonProps) {
  const [isListening, setIsListening] = useState(false);
  const [ripple, setRipple] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    setRipple(!isListening);
    
    // In a real production app, we would use Web Speech API or an external provider like Google Cloud Speech-to-Text
    if (!isListening) {
      console.log(`Starting voice recognition in ${lang}...`);
      // Mocking a successful recognition after 2 seconds
      setTimeout(() => {
        setIsListening(false);
        setRipple(false);
        if (onTranscript) onTranscript("I need a verified plumber near me");
      }, 3000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      {isListening && (
        <div className="bg-white/90 backdrop-blur-xl border border-primary/20 p-4 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300 mb-2 w-64">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary animate-pulse">Listening...</span>
            <button onClick={() => setIsListening(false)} className="text-muted hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm font-medium text-foreground italic">"I need a verified plumber..."</p>
          <div className="flex gap-1 mt-3 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-1 bg-primary rounded-full animate-bounce" 
                style={{ height: `${Math.random() * 20 + 5}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      )}

      <button
        onClick={toggleListening}
        className={`relative flex items-center justify-center h-16 w-16 rounded-full transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group ${
          isListening 
            ? 'bg-red-500 text-white shadow-red-500/40' 
            : 'bg-primary text-white shadow-primary/40'
        }`}
      >
        {/* Animated Rings for Ripple Effect */}
        {ripple && (
          <>
            <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
            <div className="absolute inset-[-8px] rounded-full bg-primary/20 animate-pulse" />
          </>
        )}
        
        {isListening ? (
          <Volume2 className="h-7 w-7 animate-pulse" />
        ) : (
          <Mic className="h-7 w-7 group-hover:rotate-12 transition-transform" />
        )}
      </button>
      
      <span className="bg-foreground text-background text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded-md shadow-sm">
        Voice Assist
      </span>
    </div>
  );
}
