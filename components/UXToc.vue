<script setup lang="ts">
  defineProps({
    toc: {
      type: Object,
      required: true
    }
  })
 
  const currentSection = reactive({
    $array:[]
  });
  onMounted(() => {
    /* grab all the headings and assign them observers */
    const nodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (nodes === undefined) return;
    // Creating the intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const $id  = entry.target.getAttribute("id");
        if (entry.isIntersecting){
          if (currentSection.$array.indexOf($id) === -1)
            currentSection.$array.push($id);       
        } else {
          if (currentSection.$array.includes($id))
            // remove the id from the array if the target element is not intersecting
            currentSection.$array.splice(currentSection.$array.indexOf($id), 1);
        }
      });
    }, {
      root: null,
    });

    nodes.forEach((target) => {
      observer.observe(target);
    });
  })
</script>

<template>
  <div>
    <ul 
      v-if="toc && toc.links" 
      class="fixed top-26"
    >
      <li 
        v-for="link in toc.links" 
        :key="link.text"
      >  
        <a 
          :href="`#${link.id}`" 
          :class="{
            'text-primary': currentSection.$array.includes(link.id) === true,
            'text-gray-500': currentSection.$array.includes(link.id) === false
          }"  
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
