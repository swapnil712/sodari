"use client"

import Alert from "@/components/Alert";
import BreadCrumb from "@/components/Breadcrumb";
import Collection from "@/components/Collection";
import Modal from "@/components/Modal";
import PageHeader from "@/components/PageHeader";
import Tab, { SegmentTab, TabNav } from "@/components/Tab";
import Table, { Td, Th } from "@/components/Table";
import Well from "@/components/Well";
import { sideBarMenu } from "@/constants/sidebar";
import { useState } from "react";


export default function Page () {


  const [showModal, setShowModal] = useState<boolean>(false)

    return <main>


        <TabNav>
          <Tab
                active="candidate"
                ariaLabel="Primary navigation"
                tabs={[
                { id: "candidate", label: "Candidates", icon: "groups" },
                { id: "/", label: "Projects", icon: "folder" },
                { id: "workflow", label: "Workflows", icon: "fork_left" },
                ]}
            />
            <Tab
                ariaLabel="Secondary Navigation"
                tabs={[
                { id: "search", icon: "search" },
                { id: "settings", icon: "settings" },
                { id: "person", icon: "person" },
                ]}
            />
        </TabNav>



        <div className="flex flex-row">

          <aside className="p-3 w-80">
            <Well isCollapsed={ true }>
              { sideBarMenu.map ( item => <Collection 
                leftIcon={ item.icon }
                key={ item.id }
                link={ item.id }
                badge={ item.isNew ? { variant : "neutral", label : "New" } : undefined }
                label={ item.label }
              />)}
            </Well>
          </aside>


          { showModal && <Modal
            title="Create a Campaign"
            onClose={ () => setShowModal( false )}
            buttons={[
              {
                label: "Cancel",
                size: "lg",
                variant: "secondary",
                onClick: () => setShowModal(false)
              }
            ]}
          >
            Children
          </Modal>}
     
            <section className="flex-1 px-3">
                
                      <BreadCrumb
                        items={[
                          { label: "Projects", link: "projects" },
                          { label: "Project XYZ", link: "projects/xyz" },
                        ]}
                      />

                      <PageHeader
                        title="Campaigns"
                        buttons={[
                          {
                            label: "Create Campaign",
                            icon: "add",
                            onClick: () => setShowModal(true),
                            variant: "primary",
                            size: "sm"
                          },
                          {
                            label: "Filter",
                            icon:"sort",
                            variant: "secondary",
                            size: "sm"
                          }
                        ]}
                      />


                      <SegmentTab
                        active="active"
                        tabs={[
                        { id: "active", label: "Active" },
                        { id: "inactive", label: "Inactive" },
                        ]}
                    />



           <Table>
                            <thead>
                              <tr>
                                <Th label="Name" handleSort={() => null } />
                                <Th label="Group" />
                                <Th label="Email" handleSort={() => null } />
                                <Th label="Status" />
                                <Th label="Action" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <Td label="Name" />
                                <Td label="Mergy Group" dot="warning" />
                                <Td label="swapnet@gmail.com" icon="verified" />
                                <Td badge={{ tone: "success", label: "Active" }} />
                                <Td buttons={[
                                  { label: "Edit", variant: "ghost", size: "sm", onClick: () => alert("Edit row") },
                                  { label: "Delete", variant: "danger", size: "sm", onClick: () => alert("Delete row") },
                                ]} />
                              </tr>
                            </tbody>
                          </Table>
                      
                
            </section>
        </div>
    </main>
}