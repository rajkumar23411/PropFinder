const Container = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-slate-100 flex flex-col p-10">
            {children}
        </div>
    );
};

export default Container;
