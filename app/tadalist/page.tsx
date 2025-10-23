"use client"
import {InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput} from "@/components/ui/input-group";
import {Plus} from "lucide-react";
import {useState} from "react";
import {AnimatePresence, LayoutGroup, motion, motionValue} from "framer-motion";
import {codeToHtml} from "shiki";

type Todo = {
  id: string;
  title: string;
}

export default function Page() {
  const animate = true;
  const [active, setActive] = useState(animate);
  const [items, setItems] = useState<Todo[]>([
    {
      id: crypto.randomUUID(),
      title: "Learn Next.js",
    }
  ])

  const [isOpen, setIsOpen] = useState(false);

  function addItem(formData: FormData) {
    const query = formData.get("todo");
    const newItem : Todo = {
      id: crypto.randomUUID(),
      title: query as string,
    }

    setItems([...items, newItem]);
  }

  function removeItem(id: string) {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }
  const backgroundColor = motionValue("#00f")

  const code = 'const a = 1' // input code
  const html =  codeToHtml(code, {
    lang: 'javascript',
    theme: 'vitesse-dark'
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="min-w-lg divide-y divide-gray-200 overflow-hidden rounded-lg bg-neutral-50 shadow-lg outline outline-neutral-300/50">
        <div className="px-4 py-5 sm:px-6">
          Ta-da List
        </div>


        <div>
          {html}
        </div>


        <div className="min-h-96">


          <LayoutGroup id="layoutGroupId">
            <motion.ul
            className="h-full mx-auto text-sm py-4 font-mono ">

              <AnimatePresence>
                {items.map(({id, title}) => {
                  return (
                    <motion.li
                      className="outline outline-gray-300 bg-sky-50 overflow-hidden p-2"
                      key={id}
                      animate={ animate && { y: 0 }}
                      initial={animate && { y: 300 }}
                      transition={{ type: "spring", damping: 20 }}
                      exit={{ height: 0 }}
                      onAnimationComplete={() => setActive(false)}
                    >
                      <motion.div
                        style={{
                          transition: "all 0.3s, transform 0s, opacity 0s",
                        }}
                      className="bg-gray-100 shadow-md ring-neutral-950/15 py-4 px-8 -mx-4 rounded-lg"

                      >
                        {title}
                      </motion.div>
                    </motion.li>
                  )

                })}

              </AnimatePresence>


            </motion.ul>
          </LayoutGroup>


          {/*<div className="px-4 py-5 sm:px-6">*/}
          {/*  <motion.ul className="relative">*/}
          {/*    {items.map(({id, title} : Todo) => (*/}
          {/*      <motion.li*/}
          {/*        layoutId={id}*/}
          {/*        initial={{ y: "100%"}}*/}
          {/*        animate={{ y: 0 }}*/}
          {/*        transition={{*/}
          {/*          type: "spring",*/}
          {/*          stiffness: 280,*/}
          {/*          damping: 18,*/}
          {/*          mass: 0.3,*/}
          {/*      }}*/}
          {/*        key={id} className="w-full outline outline-gray-300 bg-white absolute h-[50px] left-0 right-0 bottom-0">*/}
          {/*        <div className="flex items-center justify-between text-right">*/}
          {/*          <div>{title}</div>*/}
          {/*          <div>*/}
          {/*            <form action={() => removeItem(id)}>*/}
          {/*              <Button*/}
          {/*                variant="ghost" size="icon-sm">*/}
          {/*                <TrashIcon className="text-destructive" />*/}
          {/*              </Button>*/}
          {/*            </form>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </motion.li>*/}
          {/*    ))}*/}
          {/*  </motion.ul>*/}
          {/*</div>*/}

        </div>


        <div className="px-4 py-5 sm:px-6">
          <form action={addItem}>
            <InputGroup className="bg-white w-full">
              <InputGroupInput name="todo" required placeholder="Type to addItem..."/>
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="secondary">
                  <Plus/>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>
      </div>

    </div>
  )
}