import os


PROJECT_NAME = "SSA"
PROJECT_FOLDER = f"/Users/elie/repo/proto-architecture/src/assets/{PROJECT_NAME}"

IMPORT_PLAN = f""

if __name__ == "__main__":


    print(f"// {PROJECT_NAME} plan")
    i = 0
    for file in sorted(os.listdir(PROJECT_FOLDER + "/plan")):
        print(f"import {PROJECT_NAME.lower()}_plan_{i+1} from \"@/assets/{PROJECT_NAME}/plan/{file}\";")
        i += 1

    print(f"// {PROJECT_NAME} images")
    i = 0
    for file in sorted(os.listdir(PROJECT_FOLDER + "/images")):
        print(f"import {PROJECT_NAME.lower()}_img_{i+1} from \"@/assets/{PROJECT_NAME}/images/{file}\";")
        i += 1



#import chv_img_2 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_02-interieur.webp";
