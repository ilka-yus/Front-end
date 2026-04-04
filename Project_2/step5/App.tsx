import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveContainer, ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard } from './src/components/AdaptiveLayout';

export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveContainer>
        <ResponsiveHeader title="My Stylish App" />
        <AdaptiveLayout 
          content={
            <>
              <FeatureCard 
                icon="📱" 
                title="Responsive" 
                description="Works on all devices" 
              />
              <FeatureCard 
                icon="🎨" 
                title="Flexbox" 
                description="Modern layout system" 
                variant="secondary"
              />
            </>
          } 
        />
      </ResponsiveContainer>
    </SafeAreaProvider>
  );
}