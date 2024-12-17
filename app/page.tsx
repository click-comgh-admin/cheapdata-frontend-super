import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddSuperAdmin from "@/app/dashboard/AddSuperAdmin/page"
import ClientAccountSetupFee from "@/app/dashboard/client-account-setup/page"
import ClientNotifications from "@/app/dashboard/client-notifications/page"
import CreateClientAccount from "@/app/dashboard/create-client-account/page"
import CreditClientAccount from "@/app/dashboard/credit-client-account/page"
import SuperAccountLogin from "@/app/dashboard/super-account-login/page"
import ViewClientUsers from "@/app/dashboard/view-client-users/page"

export default function SuperAccountLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="__className_4b1693 antialiased" style={{ overflow: 'hidden' }}>
      <div className="dashboard-grid-container container p-4">
        <h1 className="text-4xl font-semibold text-indigo-950 mb-6">CHEAPDATA Super Account</h1>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-7 bg-ds-gray rounded-md shadow">
            {['Login', 'Setup Fee', 'Create Account', 'View Users', 'Credit Account', 'Notifications', 'Add Admin'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab.toLowerCase().replace(' ', '-')}
                className="px-3 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary focus-visible:outline-none focus-visible:ring-1 rounded-md h-8"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="login">
            <SuperAccountLogin />
          </TabsContent>
          <TabsContent value="setup-fee">
            <ClientAccountSetupFee />
          </TabsContent>
          <TabsContent value="create-account">
            <CreateClientAccount />
          </TabsContent>
          <TabsContent value="view-users">
            <ViewClientUsers />
          </TabsContent>
          <TabsContent value="credit-account">
            <CreditClientAccount />
          </TabsContent>
          <TabsContent value="notifications">
            <ClientNotifications />
          </TabsContent>
          <TabsContent value="add-admin">
            <AddSuperAdmin />
          </TabsContent>
        </Tabs>
        <div className="flex justify-end space-x-2 mt-4">
          {children}
        </div>
      </div>
    </div>
  )
}

