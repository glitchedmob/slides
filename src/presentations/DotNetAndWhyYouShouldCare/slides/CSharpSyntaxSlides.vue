<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>C# Syntax</h2>
        <pre><code data-trim data-noescape data-line-numbers="5,11|6,10|7-8|3|1,9">
using System;

namespace MyNamespace;

class Program {
    static void Main(string[] args) {
        string message = "Hello, world!"
        // var message = "Hello, world!"
        Console.WriteLine(message);
    }
}
        </code></pre>
    </SlideTypeOne>

    <SlideTypeOne>
        <h2>C# Syntax - Control Flow</h2>
        <pre><code data-trim data-noescape data-line-numbers="2-6|8-10|12-16">
static void Main(string[] args) {
    if (myInt > 10) {
        // do something
    } else {
        // do something else
    }

    foreach (var item in myList) {
        // do something with item
    }

    try {
        // some code that might throw an exception
    } catch (Exception ex) {
        // handle the exception
    }
}
        </code></pre>
    </SlideTypeOne>

    <SlideTypeOne>
        <h2>C# Syntax - Properties</h2>
        <pre><code data-trim data-noescape data-line-numbers="3-7|9-10|12">
class Person
{
    private int age;
    public int Age {
        get { return age; }
        set { age = value; }
    }

    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string FullName => $"{FirstName} {LastName}";
}
        </code></pre>
    </SlideTypeOne>

    <SlideTypeOne>
        <h2>C# Syntax - Inheritance</h2>
        <pre><code data-trim data-noescape data-line-numbers="1-11|7|2,8">
public class Animal {
    public virtual void MakeSound() {
        Console.WriteLine("The animal makes a sound");
    }
}

public class Cat : Animal {
    public override void MakeSound() {
        Console.WriteLine("The cat meows");
    }
}
        </code></pre>
    </SlideTypeOne>

    <SlideTypeOne>
        <h2>C# Syntax - Attributes</h2>
        <pre><code data-trim data-noescape data-line-numbers="1-7|1,3">
[Serializable]
public class MyClass {
    [Obsolete("This method is deprecated.")]
    public void MyOldMethod() {
        // do something old
    }
}
        </code></pre>
    </SlideTypeOne>

    <SlideTypeOne>
        <h2>C# Syntax - Generics</h2>
        <pre><code data-trim data-noescape data-line-numbers="1-15|1|2,8,12|5">
public class MyGenericClass&#60;T&#62; {
    private T[] myArray;

    public MyGenericClass(int size) {
        myArray = new T[size];
    }

    public void SetItem(int index, T item) {
        myArray[index] = item;
    }

    public T GetItem(int index) {
        return myArray[index];
    }
}
        </code></pre>
    </SlideTypeOne>
</template>
