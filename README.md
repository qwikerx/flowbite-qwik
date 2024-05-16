# Qwik Library based on Flowbite ⚡️

---

## Components

### Toast/ToastList

1. Add ToastList container component on global layout.tsx file (can be root.tsx)

```
import { ToastList } from 'flowbite-qwik'

export default component$(() => {
    return (
        <ToastList />
    )
})
```

2. Trigger a Toast on other components

```
import { Button, useToastContext } from 'flowbite-qwik'

export default component$(() => {
    const toastState = useContext(useToastContext)
    
    return (
        <Button onClick$={() => {
            toastState.add$({
              criticism: 'ERROR',
              message: 'Access Forbidden',
            })
        }}
        >
            Display Toast
        </Button>
    )
})
```
