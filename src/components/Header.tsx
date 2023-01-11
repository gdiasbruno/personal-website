export interface IAppProps {
}

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Blog', href: '#' },
]

export function Header (props: IAppProps) {
  return (
    <div className="grid grid-rows-2 place-items-center">
          <h1 className="font-sans text-3xl antialiased font-bold">
            Bruno G. Dias
          </h1>
          <div className="grid grid-cols-2 gap-4">
          {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
          </div>
    </div>
  );
}
