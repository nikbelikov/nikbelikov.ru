<projects>
    <picture each={project in opts.data.projects}>
        <source riot-srcset="img/{project}640.webp 400w, img/{project}1200.webp 640w" type="image/webp">
        <img riot-src="img/{project}640.jpg" alt="image" riot-srcset="img/{project}640.jpg 400w, img/{project}1200.jpg 640w">
    </picture>
</projects>
