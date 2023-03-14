<!-- https://youtu.be/zEq8RHqiCe8 -->
<!-- https://www.jamesperkins.dev/post/supercharge-your-astro-blog -->


<script>
        import { onMount } from 'svelte'
        onMount(_ => {
            const s = document.createElement('script')
            const tag = document.getElementById('giscus')
            s.src = "https://giscus.app/client.js"
            s.setAttribute('data-repo',"Bleeping-Dragon/Bleeping-Dragon-Astro-Web"),
            s.setAttribute('data-repo-id',"DIC_kwDOIjEaS84CU2wQ"),
            s.setAttribute('data-category',"General"),
            s.setAttribute('data-category-id',"DIC_kwDOIjEaS84CU2wQ"),
            s.setAttribute('data-mapping',"pathname"),
            s.setAttribute('data-strict',"0"),
            s.setAttribute('data-reactions-enabled',"1"),
            s.setAttribute('data-emit-metadata',"0"),
            s.setAttribute('data-input-position',"top"),
            s.setAttribute('data-theme',"preferred_color_scheme"),
            s.setAttribute('data-lang',"en"),
            s.setAttribute('data-loading',"lazy"),
            s.setAttribute('crossorigin',"anonymous"),
            s.setAttribute('async'),
            tag.parentNode.insertBefore(s, tag)
        })
</script>
        
<div id="giscus"></div>