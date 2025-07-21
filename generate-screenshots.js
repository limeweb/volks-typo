import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // Base URL - GitHub Pages live site
  const baseURL = 'https://jdrhyne.github.io/Red-Pixel';
  
  console.log('🎨 Generating Red-Pixel theme screenshots for submission...\n');
  
  // Desktop screenshots (1200px width for high quality)
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1200, height: 900 });
  
  // 1. Desktop Homepage
  console.log('📸 Capturing desktop homepage...');
  await desktopPage.goto(baseURL);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-homepage.png'),
    fullPage: false
  });
  
  // 2. Blog Listing Page
  console.log('📸 Capturing blog listing page...');
  await desktopPage.goto(`${baseURL}/blog`);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-blog.png'),
    fullPage: false
  });
  
  // 3. Individual Blog Post
  console.log('📸 Capturing individual blog post...');
  await desktopPage.goto(`${baseURL}/blog/bauhaus-design-principles/`);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-post.png'),
    fullPage: false
  });
  
  // 4. About Page
  console.log('📸 Capturing about page...');
  await desktopPage.goto(`${baseURL}/about`);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-about.png'),
    fullPage: false
  });
  
  // 5. Categories Page
  console.log('📸 Capturing categories page...');
  await desktopPage.goto(`${baseURL}/categories`);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-categories.png'),
    fullPage: false
  });
  
  // Mobile screenshots (375px width as requested)
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });
  
  // 6. Mobile Homepage
  console.log('📸 Capturing mobile homepage...');
  await mobilePage.goto(baseURL);
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-mobile-home.png'),
    fullPage: false
  });
  
  // 7. Mobile Blog Post
  console.log('📸 Capturing mobile blog post...');
  await mobilePage.goto(`${baseURL}/blog/bauhaus-design-principles/`);
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-mobile-post.png'),
    fullPage: false
  });
  
  // 8. Mobile Navigation Menu (with hamburger open)
  console.log('📸 Capturing mobile navigation menu...');
  await mobilePage.goto(baseURL);
  await mobilePage.waitForLoadState('networkidle');
  // Click the hamburger menu
  await mobilePage.click('.hamburger-toggle');
  await mobilePage.waitForTimeout(500); // Wait for animation
  await mobilePage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-mobile-menu.png'),
    fullPage: false
  });
  
  // 9. Featured Main Screenshot
  console.log('📸 Creating featured main screenshot...');
  const featuredPage = await context.newPage();
  await featuredPage.setViewportSize({ width: 1440, height: 900 });
  
  // Navigate to homepage for the best showcase
  await featuredPage.goto(baseURL);
  await featuredPage.waitForLoadState('networkidle');
  
  // Ensure we're at the top of the page
  await featuredPage.evaluate(() => {
    window.scrollTo(0, 0);
  });
  
  await featuredPage.screenshot({ 
    path: join(__dirname, 'screenshots/Red-Pixel-featured-main.png'),
    fullPage: false
  });
  
  await browser.close();
  
  console.log('\n✅ All screenshots generated successfully!');
  console.log('📁 Check the screenshots/ directory');
  console.log('\nGenerated files:');
  console.log('  - Red-Pixel-homepage.png (Desktop homepage)');
  console.log('  - Red-Pixel-blog.png (Blog listing)');
  console.log('  - Red-Pixel-post.png (Individual post)');
  console.log('  - Red-Pixel-about.png (About page)');
  console.log('  - Red-Pixel-categories.png (Categories page)');
  console.log('  - Red-Pixel-mobile-home.png (Mobile homepage)');
  console.log('  - Red-Pixel-mobile-post.png (Mobile blog post)');
  console.log('  - Red-Pixel-mobile-menu.png (Mobile navigation)');
  console.log('  - Red-Pixel-featured-main.png (Featured screenshot)\n');
}

// Run the script
generateScreenshots().catch(console.error);