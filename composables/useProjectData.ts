export const useProjectData = () => {
  /* 
  const { pending, data: projects, refresh } = useFetch(
    "url",
    {
      lazy: false,
      //for arrays, use transform e.g:
      transform: (projects) => {
        return projects.map((project) => ({

        }))
      },
      //for objects, use pick e.g:
      pick: ['key1', 'key2']
    }
  )

  //fetch data from multiple sources
  const { data: projectInfo } = useAsyncData("projectInfo", 
    async () => {
      const [projects, categories] = await Promise.all([
        $fetch("projects"),
        $fetch("categories")
      ])
      return { projects, categories }
    })
  */
  return ref()
}
