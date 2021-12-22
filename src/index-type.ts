interface errorManager{
    //Index type annotation
    [props: string] : string;
}

const errorBag: errorManager = {
    email: "Email is not valid email",
    name: "Name only contain characters"
};