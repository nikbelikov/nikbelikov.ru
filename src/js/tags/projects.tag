<projects>
    <a each={project in opts.data.projects} href="{project.url}" target="_blank">
        <picture>
            <source riot-srcset="img/{project.name}640.webp 400w, img/{project.name}1200.webp 640w" type="image/webp">
            <img riot-src="img/{project.name}640.jpg" alt="image" riot-srcset="img/{project.name}640.jpg 400w, img/{project.name}1200.jpg 640w">
        </picture>
    </a>
</projects>
