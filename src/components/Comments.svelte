<!-- https://youtu.be/zEq8RHqiCe8 -->
<!-- https://www.jamesperkins.dev/post/supercharge-your-astro-blog -->
<script>
        import { onMount } from 'svelte'
        onMount(_ => {
            const s = document.createElement('script')
            const tag = document.getElementById('utterances')
            s.setAttribute('repo',"Bleeping-Dragon/Bleeping-Dragon-Astro-Web"),
            s.setAttribute('issue-term',"pathname"),
            s.setAttribute('label',"comments"),
            s.setAttribute('theme',"github-dark"),
            s.setAttribute('crossorigin',"anonymous"),
            s.src = 'https://utteranc.es/client.js',
            tag.parentNode.insertBefore(s, tag)
        })
</script>
        
<div id="utterances"></div>