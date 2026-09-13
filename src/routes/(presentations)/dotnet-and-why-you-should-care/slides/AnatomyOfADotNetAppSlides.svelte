<script lang="ts">
    import SlideTypeTwo from '$lib/components/SlideTypeTwo.svelte';
    import asset0 from '$lib/assets/images/dotnet-app-structure.png';
</script>

<SlideTypeTwo>
    <h2>Anatomy of a .NET Project</h2>
</SlideTypeTwo>

<SlideTypeTwo>
    <h3>Files and Layout</h3>
    <div class="fragment flex items-center">
        <div class="flex-2">
            <ul>
                <li>
                    <code>.csproj</code> - Defines a C# project
                    <ul>
                        <li>Build configuration</li>
                        <li>Dependencies</li>
                    </ul>
                </li>
                <li><code>.sln</code> - Organizes multiple projects (monorepo)</li>
                <li><code>.cs</code> - C# source file</li>
                <li><code>obj</code> - Object, or intermediate, files</li>
                <li><code>bin</code> - Binary files</li>
            </ul>
        </div>
        <div class="flex-1">
            <img src={asset0} alt="A screenshot of a folder tree showing a standard .NET project layout" />
        </div>
    </div>
</SlideTypeTwo>

<SlideTypeTwo>
    <h3>Assemblies</h3>
    <ul class="fragment">
        <li>Unit of deployment and versioning</li>
        <li>Contains compiled code, resources, metadata</li>
        <li>Can be process assemblies (<code>.exe</code>) or library assemblies (<code>.dll</code>)</li>
        <li>Can have dependencies on other assemblies</li>
        <li>Loaded and executed by .NET runtime</li>
    </ul>
</SlideTypeTwo>

<SlideTypeTwo>
    <h3>A Note on .NET Versions</h3>
    <ul class="fragment">
        <li>.NET Framework</li>
        <li>.NET Core</li>
        <li>A unified .NET (.NET 5+)</li>
    </ul>
</SlideTypeTwo>
