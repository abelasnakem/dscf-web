import { ThemeProvider } from '@/theme/ThemeProvider';
import { LandingPageLayout } from '@/components/layout/LandingPageLayout';

function App() {
  return (
    <ThemeProvider>
      <LandingPageLayout />
    </ThemeProvider>
  );
}

export default App;
