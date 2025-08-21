import { Download, Share, Copy, Mail, Phone, Music, Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

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
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href =
      'data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCj4+CmVuZG9iagoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3OCAwMDAwMCBuIAp0cmFpbGVyCjw8CiAgL1NpemUgNAogIC9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgowMDAwMDAwMjY5IDAwMDAwIG4gCg==';
    link.download = 'Debanjali_Lenka_Resume.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-sm z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
    {/* Logo & Name */}
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-sm font-bold">D</span>
      </div>
      <span className="text-black font-semibold tracking-wide hover:text-green-200 transition-colors">
        Debanjali Lenka
      </span>
    </div>

    {/* Desktop Nav */}
    <nav className="hidden sm:flex items-center gap-6 text-white text-sm">
      <a href="mailto:debanjali017@gmail.com" className="hover:text-green-200 transition-colors">Contact</a>
      <a href="tel:+919827780783" className="hover:text-green-200 transition-colors">Call</a>
      <button onClick={handleShare} className="hover:text-green-200 transition-colors">Share</button>
      <button onClick={handleCopy} className="hover:text-green-200 transition-colors">Copy</button>
    </nav>

    {/* Actions */}
    <div className="flex items-center gap-2">
      <Button
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
        onClick={() => window.open('https://cactro-backend-spotify.onrender.com/login', '_blank')}
      >
        <Music className="w-4 h-4 mr-1" />
        <span className="hidden sm:inline">Connect Spotify</span>
      </Button>

      <Button
        className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
        onClick={handleDownload}
      >
        <Download className="w-4 h-4 mr-1" />
        <span className="hidden sm:inline">Download PDF</span>
      </Button>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white">
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2">
            <DropdownMenuItem onClick={() => window.location.href = 'mailto:debanjali017@gmail.com'}>
              <Mail className="w-4 h-4 mr-2 text-green-600" /> Contact
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = 'tel:+919827780783'}>
              <Phone className="w-4 h-4 mr-2 text-green-600" /> Call
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShare}>
              <Share className="w-4 h-4 mr-2 text-green-600" /> Share
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleCopy}>
              <Copy className="w-4 h-4 mr-2 text-green-600" /> Copy Link
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</header>

  )
}
