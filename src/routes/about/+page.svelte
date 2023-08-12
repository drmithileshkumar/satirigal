<script lang="ts">
    //@ts-nocheck
    import Card, {Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,} from '@smui/card';
    import { currentPath } from '$lib/stores';
    $currentPath = "About";
    let title = "About Satirigal | Online Math Practice Platform for All Ages";
    let description = "Satirigal is an online mathematics practice platform designed for learners of all ages following the Indian education system. Enhance your understanding, accuracy, and speed with our extensive collection of template-based math problems.";
    let keywords = "Satirigal, online math practice, Indian education system, mathematics, all ages, math problems, practice problems, understanding, accuracy, speed";
    let canonical = "https://satirigal.com/about";
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
    <link rel="canonical" href="{canonical}">
  </svelte:head>
  
  <main class="mdc-typography--body1">
    <Card>
      
      <Content>
        <h1 class="mdc-typography--headline4">Welcome to Satirigal</h1>
        <div>
          <div style="display:flex; flex-direction:row; align-items:center;justify-content:center; gap: 0.5em;">
            <!-- <img width="200" src="mithileshkumar.png" alt="" /> -->
            <div>
              <p>
                The goal of satirigal is to make light-hearted fun-intended take on world events and try to be as impartial as possible when it comes to satirical treatment. The users are requested to take it in good spirit and live a happy life.
              </p>
              <!-- <p style="font-weight: 600;"><a href="https://drmithileshkumar.com">Dr Mithilesh Kumar</a>, Founder</p> -->
            </div>
          </div>
          <!-- <p>
            The website is organized into classes that mirrors what is taught in schools starting at age 5. So class 1 corresponds to students of age around 5. As class number increases, problems become a little harder and cover more topics. The best way to use the templates is to start at class you fill ease with, then practice daily even on problems you can solve easily. The goal is not to test whether you can solve a problem, but to solve them fast. 
          </p> -->
        </div>
        
        
        
        
      </Content>
      
  </Card>
  </main>
  