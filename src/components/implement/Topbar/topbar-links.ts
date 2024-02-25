import {
  Contact,
  Heart,
  Home,
  InfoIcon,
  LogInIcon,
  ShoppingCart,
} from "lucide-react";

export const links = [
  {
    name: "Home",
    href: "/",
    mobileOnly: false,
    icon: Home,
  },
  {
    name: "Contact",
    href: "/contact",
    mobileOnly: false,
    icon: Contact,
  },

  {
    name: "About",
    href: "/about",
    mobileOnly: false,
    icon: InfoIcon,
  },
  {
    name: "Wishlist",
    href: "/wishlist",
    mobileOnly: true,
    icon: Heart,
  },
  {
    name: "Cart",
    href: "/cart",
    mobileOnly: true,
    icon: ShoppingCart,
  },
  {
    name: "Sign In",
    href: "/sign-in",
    mobileOnly: false,
    icon: LogInIcon,
  },
];
