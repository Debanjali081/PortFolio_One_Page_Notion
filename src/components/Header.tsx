import { Download, Share, Copy, MoreHorizontal, Mail, Phone } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Debanjali Lenka - Resume',
          text: 'Check out my professional resume',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing failed', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleDownload = () => {
    // In a real implementation, this would point to an actual PDF file
    // For now, we'll simulate the download with a data URL
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCj4+CmVuZG9iagoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3OCAwMDAwMCBuIAp0cmFpbGVyCjw8CiAgL1NpemUgNAogIC9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgowMDAwMDAwMjY5IDAwMDAwIG4gCg==';
    link.download = 'Debanjali_Lenka_Resume.pdf';
    link.click();
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">D</span>
        </div>
        <span className="text-sm text-gray-700 font-medium">Debanjali Lenka</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 cursor-pointer" onClick={() => window.location.href = 'mailto:debanjali017@gmail.com'}>
          <Mail className="w-4 h-4" />
          <span className="text-sm hidden sm:inline">Contact</span>
        </Button>
        <Button  variant="ghost" size="sm" className="flex items-center gap-1 cursor-pointer" onClick={() => window.location.href = 'tel:+919827780783'}>
          <Phone className="w-4 h-4" />
          <span className="text-sm hidden sm:inline">Call</span>
        </Button>
        <Button className='cursor-pointer' variant="ghost" size="sm" onClick={handleShare}>
          <Share className="w-4 h-4" />
        </Button>
        <Button className='cursor-pointer' variant="ghost" size="sm" onClick={handleCopy}>
          <Copy className="w-4 h-4" />
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 flex items-center gap-2 cursor-pointer" onClick={handleDownload}>
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>
    </header>
  )
}
