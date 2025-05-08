import { useLocation } from 'preact-iso';
import { cn } from '../lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';

export function Header() {
	const { path } = useLocation();

	return (
		<NavigationMenu className="px-12">
			<NavigationMenuList>
				<NavigationMenuItem>
					<a href="/">
						<NavigationMenuLink>
							Home
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="/404">
						<NavigationMenuLink>
							404
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
