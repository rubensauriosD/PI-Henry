export const ordered = (order, arr) => {
    var names = arr.map((m) => m.name);
    var rating = arr.map((m) => m.rating);
    var o = [];

    switch(order){
        case "desc":
            names = names.sort();
            names.forEach((n) =>{
                arr.forEach((element) =>{
                    if(n === element.name){
                        o.push(element);
                    }
                });
            });

            return o;

        case "asc":
            names = names.sort().reverse();
            names.forEach((n) =>{
                arr.forEach((element) =>{
                    if(n === element.name){
                        o.push(element);
                    }
                });
            });

            return o;
        
        case "rating+":
            rating = rating.sort((a,b) => b - a);
            rating.forEach((f) => {
                arr.forEach((element) => {
                    if(f === element.rating){
                        o.push(element);
                    }
                });
            });

            o = o.filter((e, i) => o.indexOf(e)=== i);
            return o;
        
        
        case "rating-":
            rating = rating.sort((a,b) => a - b);
            rating.forEach((f) => {
                arr.forEach((element) =>{
                    if(f === element.rating){
                        o.push(element);
                    }
                });
            });

            o = o.filter((e,i) => o.indexOf(e) ===  i);
            return o;

        default:
            return arr;
    }
};

export const filter = (filter, arr) => {
    var gen = []

    arr.filter((item) => {
        if (item.gender.includes(filter)) {
            gen.push(item)
        }
    })

    return gen;
}