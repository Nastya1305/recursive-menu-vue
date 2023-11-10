import { createRouter, createWebHistory } from "vue-router"
import PageContent from "@/components/PageContent";
import { menuTree } from "@/data/menuTree";


function getRoutes(menuItems, parentPath = ""){
   let routes = [];

   menuItems.forEach(item => {
      routes.push({
         path: parentPath + item.path,
         component: PageContent,
         props: {title: item.label}
      })

      if (item.children) {
         routes.push(...getRoutes(item.children, parentPath + item.path))
      }
   });

   return routes;
}


const routes = getRoutes(menuTree);

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router;