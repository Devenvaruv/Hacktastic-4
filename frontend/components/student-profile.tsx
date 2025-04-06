import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

interface StudentProfileProps {
  name: string
  image: string
  bio: string
  linkedIn: string
  github: string
}

export function StudentProfile({ name, image, bio, linkedIn, github }: StudentProfileProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-primary">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile picture`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 128px"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{bio}</p>
      <div className="flex space-x-4">
        <Link
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
          aria-label={`${name}'s GitHub profile`}
        >
          <Github size={20} />
        </Link>
      </div>
    </div>
  )
}

