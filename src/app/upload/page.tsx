'use client';
import FileUploader from '@/components/FileUploader';
import { usePDFStore } from '@/store/pdfContent';
import * as pdfjsLib from 'pdfjs-dist';
import { arrayBuffer } from 'stream/consumers';

export default function Upload() {
    const { setFileName, setPdfText } = usePDFStore();

    const handleFile = async (file: File) => {
        const pdfText: string = await extractContentFromFile(file);
        setPdfText(pdfText);
    };

    const extractContentFromFile = async (file: File) => {
        //transforma em buffer
        const arryBuffer = await file.arrayBuffer();
        const loandigTask = pdfjsLib.getDocument({ data: arryBuffer });

        const pdf = await loandigTask.promise;

        let contentPdfText = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const text = content.items.map(item => (item as any).str).join(' ');
            contentPdfText += text + '\n\n';
        }
        return contentPdfText;
    }

    return (
        <main className='w-full flex-1 overflow-y-auto flex flex-col justify-center items-start px-60 gap-10'>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='font-semibold text-[29px] text-gray-800'>Upload your PDF File</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus fuga inventore recusandae iure aspernatur iste laboriosam, culpa soluta accusamus delectus, sit voluptatibus doloribus obcaecati, amet itaque esse rem fugiat?</p>
            </div>
            <FileUploader onFileAccepted={handleFile} />
        </main>
    )
}