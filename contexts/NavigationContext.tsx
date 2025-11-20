import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Page = 
  | 'home' 
  | 'login' 
  | 'signup' 
  | 'demo' 
  | 'contact'
  | 'about'
  | 'careers'
  | 'blog'
  | 'integrations'
  | 'changelog'
  | 'privacy'
  | 'terms'
  | 'security'
  | 'compliance';

export type Language = 'en' | 'pt';

export interface Notification {
  message: string;
  type: 'success' | 'error';
}

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
  language: Language;
  toggleLanguage: () => void;
  notification: Notification | null;
  showNotification: (message: string, type: 'success' | 'error') => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [notification, setNotification] = useState<Notification | null>(null);

  const navigate = (page: Page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate, language, toggleLanguage, notification, showNotification }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};