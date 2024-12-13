import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import sharp from "sharp";

export const getBase64 = async (imgPath: string | undefined) => {
  if(imgPath == undefined) return ""
  try {
    const file = await fs.readFile(`public/${imgPath}`)
    const { base64 } = await getPlaiceholder(file)
    return base64
  } catch (error: unknown) {
    //error handling
    if (error instanceof Error) return error.message
    else if (error && typeof error === "object" && "message" in error)
      return error.message as string
    else if (typeof error === "string") return error;
    else return "Unexpected error!"
  }
}

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString('base64')}`
}


export async function getPlaceholderImage(src: string) {
  try {
    const originalBuffer = await getFileBufferRemote(src);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();
    return bufferToBase64(resizedBuffer)
  } catch {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=='
  }
}

export async function getFileBufferRemote(url: string) {
  /* https://nextjs.org/docs/app/api-reference/functions/fetch */
  /* no store -> pobiera za kazdym razem, za duzo pamieci cache zajmuja zdjecia */
  const response = await fetch(url, { cache: 'no-store' })
  return Buffer.from(await response.arrayBuffer())
}
