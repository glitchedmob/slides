<script lang="ts">
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
</script>

<SlideTypeOne>
    <h2>C# Syntax</h2>
    <pre><code data-trim data-noescape data-line-numbers="5,11|6,10|7-8|3|1,9">
using System;

namespace MyNamespace;

class Program &#123;
    static void Main(string[] args) &#123;
        string message = "Hello, world!"
        // var message = "Hello, world!"
        Console.WriteLine(message);
    &#125;
&#125;
        </code></pre>
</SlideTypeOne>

<SlideTypeOne>
    <h2>C# Syntax - Control Flow</h2>
    <pre><code data-trim data-noescape data-line-numbers="2-6|8-10|12-16">
static void Main(string[] args) &#123;
    if (myInt > 10) &#123;
        // do something
    &#125; else &#123;
        // do something else
    &#125;

    foreach (var item in myList) &#123;
        // do something with item
    &#125;

    try &#123;
        // some code that might throw an exception
    &#125; catch (Exception ex) &#123;
        // handle the exception
    &#125;
&#125;
        </code></pre>
</SlideTypeOne>

<SlideTypeOne>
    <h2>C# Syntax - Properties</h2>
    <pre><code data-trim data-noescape data-line-numbers="3-7|9-10|12">
class Person
&#123;
    private int age;
    public int Age &#123;
        get &#123; return age; &#125;
        set &#123; age = value; &#125;
    &#125;

    public string FirstName &#123; get; set; &#125;
    public string LastName &#123; get; set; &#125;

    public string FullName => $"&#123;FirstName&#125; &#123;LastName&#125;";
&#125;
        </code></pre>
</SlideTypeOne>

<SlideTypeOne>
    <h2>C# Syntax - Inheritance</h2>
    <pre><code data-trim data-noescape data-line-numbers="1-11|7|2,8">
public class Animal &#123;
    public virtual void MakeSound() &#123;
        Console.WriteLine("The animal makes a sound");
    &#125;
&#125;

public class Cat : Animal &#123;
    public override void MakeSound() &#123;
        Console.WriteLine("The cat meows");
    &#125;
&#125;
        </code></pre>
</SlideTypeOne>

<SlideTypeOne>
    <h2>C# Syntax - Attributes</h2>
    <pre><code data-trim data-noescape data-line-numbers="1-7|1,3">
[Serializable]
public class MyClass &#123;
    [Obsolete("This method is deprecated.")]
    public void MyOldMethod() &#123;
        // do something old
    &#125;
&#125;
        </code></pre>
</SlideTypeOne>

<SlideTypeOne>
    <h2>C# Syntax - Generics</h2>
    <pre><code data-trim data-noescape data-line-numbers="1-15|1|2,8,12|5">
public class MyGenericClass&#60;T&#62; &#123;
    private T[] myArray;

    public MyGenericClass(int size) &#123;
        myArray = new T[size];
    &#125;

    public void SetItem(int index, T item) &#123;
        myArray[index] = item;
    &#125;

    public T GetItem(int index) &#123;
        return myArray[index];
    &#125;
&#125;
        </code></pre>
</SlideTypeOne>
