package stepDefinations;

public class Test1 {
    public static void main(String[] args) {

        String z ="India is great";
        //Output= "ind_a is gre_t";
        String zz="";

        String kk[]=z.split(" ");
        for(int j=0;j<=kk.length-1;j++) {
            char aa[] = kk[j].toCharArray();
            int count = 0;

            for (int i = 0; i <= aa.length - 1; i++) {

                count++;
                if (count == 4) {
                    aa[i] = '_';
                }
                zz += aa[i];
            }
            zz +=" ";
        }

        System.out.println(zz);
    }
}

