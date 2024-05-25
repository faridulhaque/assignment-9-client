export type TTestimonials = {
  name: string;
  prof: string;
  img: string;
  text: string;
};

export type TTestimonialCardPage = {
  item: TTestimonials;
};

export type TInputTypes = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
};
export type CategoryModalType = {
  setNewCategory: (name: string) => void;
  handleAddCategory: () => void;
  addingCat: boolean
};
