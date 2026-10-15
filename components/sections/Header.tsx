import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import NavLinks from "@/components/ui/NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-3">
          <Button href="/login" variant="ghost" size="sm">
            Log In
          </Button>
          <Button href="/signup" variant="primary" size="sm">
            Sign Up Free
          </Button>
        </div>
      </div>
    </header>
  );
}
