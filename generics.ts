// Generics

// Generic Function
function identify<T>
(arg: T): T {
    return arg
}

// Generic Class
class Stack<T> {
    private items: T[]
    push(item: T) {
        this.items.push(item)
    }
    pop(): T | undefined {
       return
        this.items.pop()
    }
}

// Generic Interface
interface KeyValuePair<K,V>{
    key: K
    value: V
}

// Generic Constraint
function search<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(
       item => item.id
        === id
  )
}
