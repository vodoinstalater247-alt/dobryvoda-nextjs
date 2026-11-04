import Link from "next/link";

export default function PrivacyNotice() {
  return <p className="text-xs leading-5 text-muted-foreground">Odoslaním formulára beriete na vedomie spracúvanie vašich údajov na vybavenie dopytu podľa <Link href="/ochrana-osobnych-udajov" className="font-medium text-primary underline underline-offset-2">zásad ochrany osobných údajov</Link>.</p>;
}
