import {
    IconCircleDot,
    IconHome,
    IconInfoCircle,
    IconLayoutGrid,
    IconPhoto,
    IconStar,
    IconTable,
    IconUser
  } from "@tabler/icons-react"
  
  import { uniqueId } from "lodash"
  
  const Menuitems = [
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconHome,
      href: "/admin"
    },
    {
      id: uniqueId(),
      title: "Add Product",
      icon: IconCircleDot,
      href: "/admin/add"
    },
    {
      id: uniqueId(),
      title: "Add Admin",
      icon: IconCircleDot,
      href: "/admin/addadmin"
    },
    {
      id: uniqueId(),
      title: "View Products",
      icon: IconTable,
      href: "/admin/allproducts"
    },
    {
      id: uniqueId(),
      title: "Uploader",
      icon: IconInfoCircle,
      href: "/admin/imageuploader"
    },
    {
      id: uniqueId(),
      title: "Orders",
      icon: IconStar,
      href: "/admin/allorders"
    },
    
  ]
  
  export default Menuitems
  