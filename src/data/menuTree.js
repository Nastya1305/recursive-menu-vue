export const menuTree = [
   {
      label: "Услуги", path: "/services",
      children: [
         {
            label: "Косметология", path: "/cosmetology",
            children: [
               { label: "Аппаратная косметология", path: "/hardware", },
               { label: "Иньекционная косметология", path: "/injection", },
               { label: "Эстетическая косметология", path: "/aesthetic", },
            ]
         },
         { label: "Стоматология", path: "/dentistry", },
         { label: "Анализы", path: "/tests", },
         { label: "Массаж", path: "/massage", },
      ]
   },
   { label: "Врачи", path: "/doctors", },
   { label: "Блог", path: "/blog", },
   { label: "Акции", path: "/discounts", },
   { 
      label: "О клинике", path: "/about", 
      children: [
         { label: "Лицензии", path: "/licenses", },
         { label: "Контакты", path: "/contacts", },
      ]
   },
]