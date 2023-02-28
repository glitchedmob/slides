<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>
<template>
    <SlideTypeTwo>
        <h3>Programming Languages</h3>
        <ul class="fragment">
            <li>Visual Basic</li>
            <li>F# (F Sharp)</li>
            <li>C# (C Sharp)</li>
        </ul>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <div class="r-grid">
            <div class="r-col">
                <h3>The Compiler</h3>
                <ul class="fragment" data-fragment-index="1">
                    <li>Code Analysis</li>
                    <li>Language Server</li>
                    <li>Type Checking</li>
                    <li>Refactoring/Formatting</li>
                    <li class="fragment">And of course, compiling</li>
                </ul>
            </div>
            <div class="r-col fragment" data-fragment-index="1">
                <img
                    src="https://user-images.githubusercontent.com/46729679/109719841-17b7dd00-7b5e-11eb-8f5e-87eb2d4d1be9.png"
                    alt="Roslyn compiler logo"
                />
            </div>
        </div>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h3>Common Intermediate Language (CIL)</h3>
        <br />
        <pre class="fragment"><code data-trim data-noescape data-line-numbers>
.assembly Hello {}
.assembly extern mscorlib {}
.method static void Main()
{
    .entrypoint
    .maxstack 1
    ldstr "Hello, world!"
    call void [mscorlib]System.Console::WriteLine(string)
    ret
}
        </code></pre>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h3>Common Language Runtime (CLR)</h3>
        <ul class="fragment">
            <li>The .NET virtual machine</li>
            <li>Just in time (JIT) compilation</li>
            <li>Memory management/garbage collection</li>
            <li>Type safety and exception handling</li>
        </ul>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h3>Tooling</h3>
        <ul class="fragment">
            <li>Base Class Library (BCL)</li>
            <li>Nuget (package management)</li>
            <li>Visual Studio (Windows & Mac)</li>
            <li>Command line tools - <code>dotnet</code></li>
        </ul>
    </SlideTypeTwo>
</template>
