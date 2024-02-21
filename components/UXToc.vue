<script setup lang="ts">
  defineProps({
    toc: Object
  })
  const observerOptions = {
    /* root: null,
    rootMargin: "40px",
    threshold: 0.5 */
  };

  const currentSection = ref();
  onMounted(() => {
    /* grab all the headings and assign them observers */
    const nodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (nodes === undefined) return;
    console.log(nodes);
    // Creating the intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          //update current state if the target element intersects 
          //with the intersection observer's root or root margin
          currentSection.value = entry.target.getAttribute("id");
        });
    }, observerOptions);

    nodes.forEach((target) => {
      observer.observe(target);
    });
  })
</script>

<template>
  <div>
    <ul class="fixed top-26" v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.text">
        
        <a :href="`#${link.id}`" :class="{
          'text-primary': currentSection === link.id,
          'text-gray-500': currentSection !== link.id
        }">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
