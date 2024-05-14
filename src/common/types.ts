export  interface ScrollableListItemProps {
    value: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      address: string;
      gender: string;
      age: number;
      registered: string;
      orders: number;
      spent: number;
      job: string;
      hobbies: string;
      is_married: boolean;
    };
    isActive: boolean;
    onClick: () => void;
  }