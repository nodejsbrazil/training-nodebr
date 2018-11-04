<template>
  <div>
    <Hero />
    <AboutCourse />
    <LearnChecks />
    <CourseContent />
    <Author />
    <Sponsor />
    <Communities />
    <CTA />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import AboutCourse from '@/components/AboutCourse'
import LearnChecks from '@/components/LearnChecks'
import CourseContent from '@/components/CourseContent'
import Author from '@/components/Author'
import Sponsor from '@/components/Sponsor'
import Communities from '@/components/Communities'
import CTA from '@/components/CTA'

export default {
  name: 'Home',
  components: {
    Hero,
    AboutCourse,
    LearnChecks,
    CourseContent,
    Author,
    Sponsor,
    Communities,
    CTA
  }
}
</script>
