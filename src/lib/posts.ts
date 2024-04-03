import { AuthorObject, BlogPost, Meta } from "../../types";
import Video from "@/components/Video";
import CustomImage from "@/components/CustomImage";
import path from 'path';
import fs from 'fs/promises';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import {
    remarkExtractFrontmatter,
    remarkCodeTitles,
    remarkImgToJsx,
} from 'pliny/mdx-plugins/index.js'
import { getAutorsByNick } from "./autors";

export const getPosts = async (locale: string) => {

    const posts: Meta[] = [];
    const folderPath = `./src/data/posts/${locale}`;

    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const post = await getPostByName(file, locale);
            if (post) {
                const { meta } = post;
                posts.push(meta);
            }
        }

        return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    }
    catch (error) {
        console.error(`Błąd podczas odczytu folderu dla autorów:`, error);
    }

    return posts
}

export async function getPostByName(fileName: string, locale: string) {

    const filePath = path.join(`./src/data/posts/${locale}`, fileName);

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');

        const { frontmatter, content } = await compileMDX<{
            id: string,
            title: string,
            date: string,
            tags: string,
            image: string,
            description: string,
            authors: string[],
        }>({
            source: fileContent,
            components: {
                Video,
                CustomImage,
            },
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "wrap", }],
                    ],
                    remarkPlugins: [
                        remarkGfm,
                        remarkMath,
                        remarkImgToJsx,
                        remarkCodeTitles,
                        remarkExtractFrontmatter,
                    ]

                },
            }
        });

        const author = frontmatter.authors === undefined ? ["default"] : frontmatter.authors;
        const authors = await getAutorsByNick(author);

        const blogPostObj: BlogPost = {
            meta: {
                id: fileName.slice(0, -4),
                title: frontmatter.title,
                date: frontmatter.date,
                tags: frontmatter.tags,
                image: frontmatter.image,
                description: frontmatter.description,
                authors: authors,
            },
            content,
        };

        return blogPostObj

    } catch (error) {
        console.error(`Błąd podczas odczytu pliku dla posta ${fileName}:`, error);
    }

    return null
}