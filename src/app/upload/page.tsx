'use client';
import FileUploader from '@/components/FileUploader';


export default function Upload() {
    const handleFile = (file: File) => {
        console.log('Arquivo recebido:', file);
        // aqui você chama o pdfjs, extrai texto etc.
    };
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