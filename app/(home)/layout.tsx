import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export default async function HomeLayout(
    {children}: { children: React.ReactNode }
) {

   return (
       <div className="bg-gray-100/50">
          <SiteHeader/>
          {children}
          <SiteFooter/>
       </div>

   )
}
