public class DSAnalysisTest {
        public static void main(String[] args) {
            DSArrayList<String> list = new DSArrayList<String>(); //this calls line 14
            //local variables do not get default variable
            list.add("Database");
            list.add("Medical");
            list.add("Image Processing");
            list.add("Building");
            list.add("Clustering");
            list.add("Image-Management"); //where it forms amortized constant because it forces the array to create an array of doubled size and moving everything intp the new array
            System.out.println("Database exists? " + list.contains("Database"));
            list.printArray();
            String obj = "Image Processing";
            int index = list.contains(obj);
            if (index >=0){
                list.lazyRemove(index);
            }
            else 
                System.out.printf("Object %s does not exist\n", obj);
            list.lazyRemove(2); //figure out how to append
            //O(n) for lazyRemove b/c call to contains is required and linear
            list.printArray();
            // list.get(2)
            list.clear();
            list.printArray();

        }
        public static int binaryInsert(DSArrayList<String> list, String insertKey){
            int lowerBound = 0;
            int nElements = list.size();
            int upperBound = nElements - 1;

            while (true){
               int curIn = ((upperBound + lowerBound) /2);
                if (nElements == 0)
                    return curIn = 0;
                if (lowerBound == curIn)
                    if (list.get(curIn).compareTo(insertKey) > 0){
                        return curIn;
                    }
            }
            if (list.get(curIn).compareTo(insertKey)<0) {
                lowerBound = curIn + 1;
                    if (lowerBound > upperBound){
                        return curIn += 1;
                    }
            
            else if (lowerBound > upperBound){
                return curIn;
            }
            else {
                upperBound = curIn - 1;
            }
        }
    }
        
    }
class DSArrayList<E> { //an array of type E that can take on any type which allows us to put <String> in line 3s command
    //a generic class using E
    private transient E[] dataArray;
    // serialization: saving the state of the object transient: the object cannot be serialized it (start over everytime_
    private static final int DEFAULT_CAPACITY = 5;
    //static: can be accessed but not changed
    private int size; //instance variables are given default variables

    public DSArrayList() { //this calls line 15
        this(DEFAULT_CAPACITY);
        System.out.println("Default constructor");

    }

    public DSArrayList(int capacity) { //o(1)
        System.out.println("Value constructor");
        if (capacity < 0) {
            System.out.println("nar constructor");
            throw new IllegalArgumentException();

        }
        System.out.println("narwal constructor");

        dataArray = (E[]) new Object[capacity]; //casting an array object with 4 elements into a string array (E is a string)
    }

    public boolean add(E e) { //*O(1) // its currently dumb but needs to have a move function if doing binary search
        if (size == dataArray.length) { //O(N) beause of ensurecapacity only when we need to double the array
            ensureCapacity(size + 1);
            //size is how many elements are in the array data.length is how much the array can hold
            System.out.println(e);

        }
        dataArray[size++] = e; //O(1)
        return true;
    }

    @SuppressWarnings("unchecked")
    public void ensureCapacity(int minCapacity) {
        int current = dataArray.length;
        if (minCapacity > current) {
            System.out.println("Testing1" + dataArray.length);

            E[] newDataArray = (E[]) new Object[Math.max(current * 2, minCapacity)]; // O(1)
            System.arraycopy(dataArray, 0, newDataArray, 0, size); //0(N)
            dataArray = newDataArray;// O(1)
            System.out.println("Testing2" + dataArray.length);

        }
    }

    public int size() {
        return size;
    }

    public int length() {
        return dataArray.length;
    }

    public int contains(Object e) { //O(n) bc of the for index
        int index = indexOf(e);
        return index;
    }

    public int indexOf(Object e) { //O(n) bc of the for loop | object is needed for generics
        for (int i = 0; i < size; i++) {
            if (e.equals(dataArray[i])) {
                return i;
            }

        }
        return -1;
    }
    //code on sept 9th
    public  void printArray(){ //we made this a class bc we dont sell main classes. This is like having a services classes. Ethical responsibilities.
        System.out.println();
        for (int i=0; i < size; i++){
            System.out.printf("[%d} %s\n", i, dataArray[i]);

        }
        System.out.printf("Size: %d and Length: %d\n ", size, dataArray.length);
    }

    public void clear() {
        dataArray = (E[]) new Object[DEFAULT_CAPACITY]; //casting an array object with 4 elements into a string array (E is a string)
        size = 0;
    }
    public E remove(int index){
        checkBoundExclusive(index);
        E temp = dataArray[index];
        if (index != --size) //
            System.arraycopy(dataArray, index+1, dataArray, size, index);  //(object src, srcpos, )
        dataArray[size] = null;
        return temp;
    }
    //added sept 6, 
    public E lazyRemove(int index){
        checkBoundExclusive(index); //check if your position is valid
        E temp = dataArray[index]; //so you know what value to remove
        //lazy deletion doesnt shift
        System.out.printf("%s\n", temp);
        dataArray[index] = null; //lazy deletion so no need for shift, rather just set the index to null
        return temp;
    }
    private void checkBoundExclusive(int index){
        if (index>= size) 
            throw new IndexOutOfBoundsException("Index: " + index + ", size: " + size);
            //look into arraycopy for java
    }
    //added sept 6
    public E get(int index){
        rangeCheck(index);
        return dataArray[index];
    }
    private void rangeCheck(int index){
        if (index>= size)
            throw new IndexOutOfBoundsException(outOfBoundMsg(index));
    }
    private String outOfBoundMsg(int index){
        return "Index: " + index + ". size: " + this.size;
    }

}




