export interface IAppProps {
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/blog' },
]

export function Header (props: IAppProps) {
  return (
    <div className="grid place-items-center p-5">
          <h1 className="font-sans text-3xl antialiased font-bold">
            Bruno G. Dias
          </h1>
          <div className="grid grid-cols-2 gap-4">
          {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="font-semibold antialiased">
                  {item.name}
                </a>
              ))}
          </div>
    </div>
  );
}
