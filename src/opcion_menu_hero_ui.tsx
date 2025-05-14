import React from "react";
import { Icon } from "@iconify/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  Listbox,
  ListboxItem,
  useDisclosure
} from "@heroui/react";

export default function CollapsibleMenu() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [expanded, setExpanded] = React.useState(false);
  
  const menuItems = [
    { key: "dashboard", icon: "lucide:layout-dashboard", label: "Dashboard" },
    { key: "profile", icon: "lucide:user", label: "Perfil" },
    { key: "messages", icon: "lucide:message-square", label: "Mensajes" },
    { key: "settings", icon: "lucide:settings", label: "Configuración" },
    { key: "help", icon: "lucide:help-circle", label: "Ayuda" },
  ];

  const handleMenuAction = (key) => {
    console.log(`Selected: ${key}`);
  };

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex h-screen">
      {/* Collapsed sidebar - always visible */}
      <div className={`bg-content1 border-r border-divider flex flex-col items-center py-4 transition-all duration-300 ${expanded ? "w-0 opacity-0" : "w-16 opacity-100"}`}>
        <Button 
          isIconOnly 
          variant="light" 
          className="mb-6" 
          onPress={toggleMenu}
        >
          <Icon icon="lucide:menu" width={24} />
        </Button>
        
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Button
              key={item.key}
              isIconOnly
              variant="light"
              className="text-default-600 hover:text-primary"
              onPress={() => handleMenuAction(item.key)}
            >
              <Icon icon={item.icon} width={24} />
            </Button>
          ))}
        </div>
      </div>

      {/* Expanded sidebar - shown when button is clicked */}
      <Drawer 
        isOpen={expanded} 
        onOpenChange={(open) => setExpanded(open)}
        placement="left"
        size="sm"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        className="z-0"
      >
        <DrawerContent className="h-full">
          {() => (
            <>
              <DrawerHeader className="flex flex-row items-center justify-between">
                <span className="text-xl font-bold">Menú</span>
                <Button 
                  isIconOnly 
                  variant="light" 
                  onPress={toggleMenu}
                >
                  <Icon icon="lucide:chevron-left" width={24} />
                </Button>
              </DrawerHeader>
              <DrawerBody className="p-0">
                <Listbox 
                  aria-label="Menu Options" 
                  onAction={handleMenuAction}
                  variant="flat"
                  className="p-0"
                >
                  {menuItems.map((item) => (
                    <ListboxItem
                      key={item.key}
                      startContent={<Icon icon={item.icon} width={24} />}
                      className="py-3"
                    >
                      {item.label}
                    </ListboxItem>
                  ))}
                </Listbox>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Contenido Principal</h1>
        <p>Haga clic en el botón de menú para expandir o colapsar la navegación.</p>
      </div>
    </div>
  );
}