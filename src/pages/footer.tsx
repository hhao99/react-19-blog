export default function Footer() {
  return (
    <div className="w-full border-t border-gray-300 p-2 text-center">
      <p className="text-sm text-gray-600">
        @{new Date().getFullYear()} My Blog. All rights reserved.
      </p>
    </div>
  )
}